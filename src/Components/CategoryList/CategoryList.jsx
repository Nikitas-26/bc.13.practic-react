import { Component } from "react";

class CategoryList extends Component {
  state = {
    inputCategory: "",
  };
  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ inputCategory: value });
  };
  render() {
    const { categoriesList } = this.props;
    return (
      <>
        <ul>
          {categoriesList.map((el) => {
            <li>
              <p>Заголовок</p>
              <button type="button">...</button>
              <div>
                <button>Удалить</button>
                <button>Изменить</button>
              </div>
            </li>;
          })}
        </ul>
        <form>
          <input type="text" placeholder="Новая Категория" onChange={this.handleInput} value={this.state.inputCategory} />
          <button type="submit">+</button>
        </form>
      </>
    );
  }
}

export default CategoryList;
