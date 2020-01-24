import * as React from 'react';
import { SearchModes } from './searchmodes';

export default class Searcher extends React.Component<{Placeholder: string, OnClick: Function, Id: string}, any> {
    render() {
        return  <div className="searcher-container">
                    <input id={`searcher-${this.props.Id}`} type="text"/>
                    <button className="searcher-button">Search</button>
                    <SearchModes />
                </div>
    }
}