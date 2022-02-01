const Transaction = () => {
  return (
      <>
      <select name="transactionType" id="">
          <option  value="incomes">Доходы</option>
          <option value="costs">Расходы</option>
      </select>
    <form action="">
      <label >
      день
        <input type="date" />
      </label>
      <label>
          Время
        <input type="time" />
      </label>
      <label>
          Категория
        <input type="button" value="Еда" />
      </label>
      <label>
          Сумма
        <input type="text" placeholder="Введите сумму" />
      </label>
      <label>
          Валюта
        <input type="button" value="UAH" />
      </label>
      <label>
          <input type="text" placeholder="Введите комментарий..." />
      </label>
    </form>
    </>
  );
};

export default Transaction;
