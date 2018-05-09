import * as React from 'react';

interface IProps {
    text: string;
    done: boolean;
    onToggle(): void;
    onRemove(): void;
}

const TodoItem: React.SFC<IProps> = ({text, done, onToggle, onRemove}) => (
    <li>
        <b style={{textDecoration: done ? 'line-through' : 'none'}} onClick={onToggle}>{text}</b>
        <span style={{marginLeft: '0.5rem'}} onClick={onRemove}>[Remove]</span>
    </li>
)

export default TodoItem;