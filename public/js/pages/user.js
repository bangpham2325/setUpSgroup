
function TableItem(user) {
    return `
    <tr>
        <td> ${user.user_id}
        <td> ${user.username}
        <td> ${user.fullName}
        <td> ${user.status}
        <td> ${user.roles.toString()}
    </tr>
    `;
}
function PageItem(value) {
    return `
    <li class="page-item">
        <a class="page-link" href="#">${value}</a>
    </li>
    `
}
let count=1;
async function callApiGetUser(choosenPage, selectNumberRow, searchContent="",i) {
    try {
        const queryString = `http://localhost:3000/api/v1/users?page=${choosenPage}&selectNumberRow=${selectNumberRow}&searchContent=${searchContent}`;
        const response = await $.ajax({
            url: queryString,
            method: 'GET'
        });
        $('#user-table').empty();
        response.data.forEach(user => {
            $('#user-table').append(TableItem(user));
        })
        if(count ==1){
            const totalPage = await Math.ceil(response.totalRecord[0].total / selectNumberRow);
  
            $('.pagination').append(PageItem('&laquo'));
    
            for (let index = 1; index < totalPage + 1; index++) {
                $('.pagination').append(PageItem(index));
            }
    
            $('.pagination').append(PageItem('&raquo'));
        }
        count++;
        await changePage()
        await loadDataTableClickPage()

        


    } catch (error) {
        console.log(error)
        if (error.status !== 500) {
            if (error.responseJSON.code === 'TOKEN_INVALID') {
                localStorage.removeItem('user');
                return;
            }
            alert(error.responseJSON.message)
            return;
        }
        alert(error.responseJSON.message)
    }
}


function loadDataTable(choosenPage = 1, offset = 1){
    $('#user-table').empty()
    const selectNumberRow = document.getElementById('selectNumberRow').value;
    const searchContent = document.querySelector('#searchContent').value;
    offset = selectNumberRow*(choosenPage - 1) + 1;
    callApiGetUser(choosenPage, selectNumberRow, searchContent, offset);
    
}


async function loadDataTableClickPage(choosenPage = 1, offset = 1){
    
    document.querySelector('#searchContent').addEventListener('change', async function(e) {
        $('#user-table').empty()
        loadDataTable();
    })
    document.getElementById('selectNumberRow').addEventListener('change', async function(e) {
        $('#user-table').empty()
        count=1;
        loadDataTable();
        $('.pagination').empty()
   })
    
}

async function changePage(){
    const page= document.getElementsByClassName("page-item");
    for(let i = 1;i < page.length-1; i++){
        if(page[i]){
            page[i].addEventListener("click",function () {
                $('#user-table').empty()
                const choosenPage = page[i].childNodes[1].textContent
                const offset = document.getElementById('selectNumberRow').value*(choosenPage - 1) + 1;
                loadDataTable(choosenPage,offset)
                
            })
        }

    }

}
window.addEventListener("load", async (e) => { 
	loadDataTable();
}, false);