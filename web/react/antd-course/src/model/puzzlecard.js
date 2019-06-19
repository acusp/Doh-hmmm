import request from '../util/request';
import { message } from 'antd';

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',

  state: {
    data: [
      {
        id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
    counter: 100,
  },

  effects: {
    *queryInitCards(_, { call, put }) {
      const endPointURI = '/api';

      try {
        const data = yield call(request, endPointURI);
        //const puzzle = { setup: data.results[0].name.first, punchline: data.results[0].email  };

        //yield put({ type: 'addNewCard', payload: puzzle });
        yield put({ type: 'addNewCard', payload: data });

        yield call(delay, 3000);

        const data2 = yield call(request, endPointURI);
        //const puzzle2 = { setup: data2.results[0].name.first, punchline: data2.results[0].email  };
        //yield put({ type: 'addNewCard', payload: puzzle2 });
        yield put({ type: 'addNewCard', payload: data2 });
      } catch (e) {
        message.error('数据获取失败');
      }
    }
  },

  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};
