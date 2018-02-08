import todos from './todos'
import * as types from '../constants'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    // initial state test
    expect(
      todos(undefined, {})
    ).toEqual([
      {
        text: 'Todo',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([{
        text: 'Todo1',
        completed: false,
        id: 1
      }], {
        type: types.ADD_TODO,
        text: 'Hello World'
      })
    ).toEqual([{
      text: 'Hello World',
      completed: false,
      id: 2
    }, {
      text: 'Todo1',
      completed: false,
      id: 1
    }])
  })

  it('should handle DELETE_TODO', () => {
    expect(
      todos([{
        text: 'Todo1',
        completed: false,
        id: 1
      },{
        text: 'Todo2',
        completed: false,
        id: 2
      }], {
        type: types.DELETE_TODO,
        id: 1
      })
    ).toEqual([{
      text: 'Todo2',
      completed: false,
      id: 2
    }])
  })
})