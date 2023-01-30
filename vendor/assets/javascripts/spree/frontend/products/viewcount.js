function viewToggle(n) {
    const gridClasses = ["grid-cols-2", "grid-cols-3", "grid-cols-4"]
    var grid = document.getElementsByClassName("products--grid");
    grid[0].classList.remove(grid[0].classList[grid[0].classList.length - 1])
    grid[0].classList.add(gridClasses[n])
}