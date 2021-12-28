window.addEvenListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});

//Templete features 
const createInnerHtml = () =>{
const innerHtml =`
<table id="display" class="table-main">
    <!-- UC 3 -->
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" alt="" src="Asset/Profile pic/Ellipse -2.png">
        </td>
        <td>Narayan Mahadevan</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="Asset/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="Asset/icons/create-black-18dp.svg">
        </td>
    </tr>
</table>
`;
document.querySelector('#table-display').innerHtml = innerHtml;
}