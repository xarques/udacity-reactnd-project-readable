import React, { Component } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

class SortMenu extends Component {
  state = {
    hidden: true
  }

  handleDisplayMenu() {
    this.setState(state =>
      ({ hidden: !state.hidden})
    );
  }

  handleSelectSort(sortType) {
    this.props.sortPosts(sortType);
    this.handleDisplayMenu();
  }

  render() {
    const { hidden } = this.state;
    const { sort } = this.props;
    console.log(sort)
    return <div className="sort-menu-container">
        <FontAwesomeIcon onClick={e => this.handleDisplayMenu()} className="sort-menu-icon" icon={faBars} />
      <ul className={`sort-menu-list ${hidden ? "sort-menu-hidden" : ""}`}>
        <li className={`${sort === 'BY_DATE_ASC' ? 'sort-menu-item-active' : ''}`} onClick={e => this.handleSelectSort("BY_DATE_ASC")}>By Date ASC</li>
        <li className={`${sort === 'BY_DATE_DESC' ? 'sort-menu-item-active' : ''}`} onClick={e => this.handleSelectSort("BY_DATE_DESC")}>By Date DESC</li>
        <li className={`${sort === 'BY_SCORE_ASC' ? 'sort-menu-item-active' : ''}`} onClick={e => this.handleSelectSort("BY_SCORE_ASC")}>By Vote ASC</li>
        <li className={`${sort === 'BY_SCORE_DESC' ? 'sort-menu-item-active' : ''}`} onClick={e => this.handleSelectSort("BY_SCORE_DESC")}>By Vote DESC</li>
        </ul>
      </div>;
  }
}

export default SortMenu;
