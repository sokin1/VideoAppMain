import * as React from 'react';
import TodoItem from './TodoItem';

interface ITodoItemData {
    id: number;
    text: string;
    done: boolean;
}

interface IState {
    todoItems: ITodoItemData[];
    input: string;
}

class TodoList extends React.Component<object, IState> {
    public id: number = 0;
    public state: IState = {
        input: '',
        todoItems: [],
    }

    public onToggle = (id: number): void => {
        const {todoItems} = this.state;
        const index = todoItems.findIndex(todo => todo.id === id);
        const selectedItem = todoItems[index];
        const nextItems = [...todoItems];

        const nextItem = {
            ...selectedItem,
            done: !selectedItem.done,
        };

        nextItem[index] = nextItem;

        this.setState({
            todoItems: nextItems
        });
    }

    public onRemove = (id: number): void => {
        this.setState(
            ({todoItems}) => ({
                todoItems: todoItems.filter(todo => todo.id !== id)
            })
        );
    }

    public onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const {value} = e.currentTarget;

        this.setState({
            input: value
        });
    }

    public onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState(
            ({todoItems, input}) => ({
                input: '',
                todoItems: todoItems.concat({
                    done: false,
                    id: this.id++,
                    text: input,
                })
            })
        );
    }

    public render() {
        const {onSubmit, onChange, onToggle, onRemove} = this;
        const {input, todoItems} = this.state;

        const todoItemList = todoItems.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={() => onToggle(todo.id)}
                    onRemove={() => onRemove(todo.id)}
                    text={todo.text}
                />
            )
        );

        return (
            <div>
                <h1>What todo?</h1>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={input} />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {todoItemList}
                </ul>
            </div>
        );
    }
}

export default TodoList;