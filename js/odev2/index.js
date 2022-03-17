let todoList = [
    {
        id: 1,
        title: "3 Litre Su İç",
    },
    {
        id: 2,
        title: "Ödevleri Yap",
    },
    {
        id: 3,
        title: "En Az 3 Saat Kodlama Yap",
    },
    {
        id: 4,
        title: "Yemek Yap",
    },
    {
        id: 5,
        title: "50 Sayfa Kitap Oku",
    },

]


const todoInput = document.getElementById("task")
const todoDisplayUl = document.getElementById("list");
const addedToast = document.getElementById("liveToastAdd")
const inputTost = document.getElementById("liveToastInput")

const addTodo = () => {
    if (todoInput.value === "" || todoInput.value === " ") {
        let toast = new bootstrap.Toast(inputTost)
        toast.show()
    } else {

        todoList.push({ id: Math.floor(Math.random() * 100), title: todoInput.value })
        todoInput.value = ""
        displayTodoList()
        let toast = new bootstrap.Toast(addedToast)
        toast.show()
    }

}

const displayTodoList = () => {
    todoDisplayUl.innerHTML = "";

    todoList.forEach(todo => {

        todoDisplayUl.innerHTML += `
        <li onclick="li.">
        ${todo.title}
        <button class="btn-close close" onclick="deleteTodo(${todo.id})"></button>
        </li>
        
        `
    })

}

//toggle for checked each todo.
todoDisplayUl.addEventListener("click", (e) => {
    e.target.classList.toggle("checked")
})

const deleteTodo = (id) => {
    todoList = todoList.filter(todo => todo.id !== id)
    displayTodoList()
}
displayTodoList()

