import { MODES } from '../Enums/Modes';
import { SearchMode } from './searchmode';
import * as React from 'react';

export class SearchModes extends React.Component<any, {SearchModes: string[]}> {
    constructor(props) {
        super(props)
        this.state = {
            SearchModes: [
                MODES,
            ]
        }
    }

    render() {
        return  <div className="search-type-container">
                    <div id="search-type">
                        <div className="search-type-header">Search By</div>
                        <div className="search-type-grid">
                            {this.state.SearchModes.map((m, i) => <SearchMode key={i} mode={m}/>)}
                        </div>
                    </div>
                </div>
    }
} 