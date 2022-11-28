
async function main(){
    let response = await fetch('http://localhost:3001/listBooks');
    let bookList = await response.json();
    bookList.forEach(displayTitle);
}

//save function to send updated information to server
async function save(num){
    let input = document.getElementById(`adminInput${num}`).value;
    
    
    await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: num, 
            quantity: input 
            
        })
    })
}


function displayTitle(book){
    let root = document.getElementById('root');
    //var bookID = book.id;
    root.innerHTML += `
        <ul>
            <li>
                <label>
                ${book.title}
                </label>
                <input id = 'adminInput${book.id}'/>
                <button onclick = "save(${book.id})"> Save </button>
            </li>
        </ul>
    `
 

}

main();
