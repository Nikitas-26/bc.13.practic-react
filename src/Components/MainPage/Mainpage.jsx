import Transaction from "../TransactionForm/TransactionForm";

const MainPage = ({changePage}) => {
    return ( 
        <>
        <Transaction/>
        <button onClick={()=>{
            changePage('incomes')
        }}  type="button">Доходы</button>
        <button onClick={()=>{
            changePage('costs')
        }} type="button">Расходы</button>
        </>
        );
}
 
export default MainPage;