    module SolidusPayMob
        class Gateway
            API_URL = "https://accept.paymob.com/api"

            attr_reader :paymob_key

            # should just contain a hash with api key and secret key
            def initialize(options)
                @paymob_key = options.fetch(:paymob_key)
            end

            # first two params not used, options could also use 'gateway_options', hash with all preferences, the preferences come from the two lines assigining pref at top of payment method file
            def authorize(key)
                response = request(
                    :post,
                    "/auth/tokens",
                    {"api_key": key},
                )

                if response.success?
                    ActiveMerchant::Billing::Response.new(
                        true,
                        "Transaction Authorized",
                        {},
                        paymob_auth_token: response.parsed_response["token"],
                    )
                else
                    ActiveMerchant::Billing::Response.new(
                        false,
                        response.parsed_response["error"],
                    )
                end
            end

            #changed the option parameters as per the API
            def purchase(auth_token, params)
                response = request(
                    :post,
                    '/ecommerce/orders',
                    {
                        "auth_token": auth_token,
                        "delivery_needed": false,
                        "amount_cents": params[:options][:amount],
                        "items": []
                    }
                )

                if response.success?
                    ActiveMerchant::Billing::Response.new(
                        true,
                        "Transaction Purchased",
                        {},
                        paymob_order_id: response.parsed_response["id"],
                    )
                else
                    ActiveMerchant::Billing::Response.new(
                        false,
                        response.parsed_response["error"],
                    )
                end
            end

            def capture(auth_token, order_id, params)
                response = request(
                    :post,
                    'acceptance/payment_keys',
                    {
                        "auth_token": auth_token,
                        "amount_cents": params[:options][:amount],
                        "expiration": 3600,
                        "order_id": order_id,
                        "billing_data": {
                            "apartment": "NA", 
                            "email": params[:options][:email], 
                            "floor": "NA", 
                            "first_name": params[:options][:first_name], 
                            "street": params[:options][:street], 
                            "building": params[:options][:building], 
                            "phone_number": params[:options][:phone_number], 
                            "shipping_method": "NA", 
                            "postal_code": params[:options][:zip_code], 
                            "city": params[:options][:city], 
                            "country": params[:options][:country], 
                            "last_name": params[:options][:last_name], 
                            "state": "NA"
                        }, 
                        "currency": params[:options][:currency],
                        # extract this to not be hardcoded in
                        "integration_id": 3410599
                    }
                )

                if response.success?
                    ActiveMerchant::Billing::Response.new(
                        true,
                        "Transaction Captured",
                        {},
                        paymob_payment_token:  response.parsed_response["token"],
                    )
                else
                    ActiveMerchant::Billing::Response.new(
                        false,
                        response.parsed_response["error"],
                    )
                end
            end
                

            private

            def request(method, uri, body = {})
                HTTParty.send(
                    method,
                    "#{API_URL}#{uri}",
                    headers: {
                        "Authorization" => "Bearer #{paymob_key}",
                        "Content-Type" => "application/json",
                        "Accept" => "application/json",
                    },
                    body: body.to_json,
                )
            end

            def payload_for_charge(money, auth_token, gateway_options)
                {
                    auth_token: auth_token,
                    amount: money,
                    currency: options[:currency],
                    description: "Payment #{options[:order_id]}",
                    billing_address: options[:billing_address],
                }
            end
        
        
        end    
    end
