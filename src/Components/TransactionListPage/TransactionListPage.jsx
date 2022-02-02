import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = ({changePage, transType}) => {
    return ( 
        <>
        <h1>transactionListPage</h1>
        <TransactionList/>
        <button onClick={()=>{
            changePage('main')}} type="button">На главную</button>
        </>
     );
}
 
export default TransactionListPage;