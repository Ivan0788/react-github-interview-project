import * as React from 'react';

export default class SearchBar extends React.Component<{Placeholder: string, OnChange: Function, Type: string}, any> {
    render() {
        return  <div className="search-bar-container">
                    <input id={`search-bar-${this.props.Type}`} type="text" placeholder={this.props.Placeholder} onChange={() => this.props.OnChange()}/>
                </div>
    }
}