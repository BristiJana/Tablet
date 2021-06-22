import React , { useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, {textFilter, numberFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

function DataList()
{
	const[userList,setUserList]=useState([]);
 const columns=[


{dataField :'userId',text:'UserId', sort: true, filter: numberFilter()},
{dataField :'id' , text:'Id', sort: true},
{dataField : 'title' , text:'Title', sort: true, filter: textFilter()},
{dataField :'body' , text:'Body', sort:true, filter: textFilter()}
]

const pagination=paginationFactory({

page:1,
sizePerPage: 10,
lastPageText: '>>',
firstPageText: '<<',
nextPageText: '>',
prePageText: '<',
showTotal: true,
alwaysShowAllBtns: true,
onPageChange: function(page,sizePerPage)
{
	console.log('page',page);
	console.log('sizePerPage',sizePerPage);
},

onSizePerPageChange: function(page,sizePerPage)
{
  console.log('page',page);
  console.log('sizePerPage',sizePerPage);
}




});
  useEffect(() => {
 
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(result => setUserList(result))
.catch(error => console.log(error));

 },[] )
	return <div>
	<BootstrapTable bootstrap4 keyField='id' columns={columns} data={userList}
	pagination={pagination}
	filter={filterFactory()}
	/>
	</div>
}

export default DataList;