import { Component } from "react";
import CategoryList from "../CategoryList/CategoryList";
class Transaction extends Component {
  state = {
    date: "2022-02-03",
    time: "",
    category: "еда",
    sum: "",
    currency: "UAH",
    comment: "",
    categoriesList:[]
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)};

  render() {
    const { date, time, category, sum, currency, comment,categoriesList } = this.state;
    return (
      <>
        <select name="transactionType" id="">
          <option value="incomes">Доходы</option>
          <option value="costs">Расходы</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <label>
            день
            <input type="date" name="date" value={date} onChange={this.handleChange} />
          </label>
          <label>
            Время
            <input type="time" name="time" value={time} onChange={this.handleChange} />
          </label>
          <label>
            Категория
            <input type="button" name="category" value={category} onClick={null} />
          </label>
          <label>
            Сумма
            <input type="text" placeholder="Введите сумму" name="sum" value={sum} onChange={this.handleChange} />
          </label>
          <label>
            Валюта
            <input type="button" value={currency} name="currency"  onClick={null} />
          </label>
          <label>
            <input type="text" placeholder="Введите комментарий..." name="comment" value={comment} onChange={this.handleChange} />
          </label>
          <button type="submit">отправить форму</button>
        </form>
        <CategoryList categoriesList={categoriesList}/>
      </>
    );
  }
}

export default Transaction;
