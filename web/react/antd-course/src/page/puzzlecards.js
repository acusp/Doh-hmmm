import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

/*
const mapStateToProps = (state) => {
  const cardList = state[namespace];
  return {
    cardList,
  };
};
*/

/*
const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};
*/

// @connect(mapStateToProps, mapDispatchToProps)
@connect(({ puzzlecards }) => ({
  cardList: puzzlecards.data,
}))
export default class PuzzleCardsPage extends Component {

  addNewCard = (newCard) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'puzzlecards/addNewCard',
      payload: newCard,
    });
  }

  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={() => this.addNewCard({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}>添加卡片</Button>
        </div>
      </div>
    );
  }
}
