import { MODES, Modes } from '../Enums/Modes';
import * as React from 'react';

const DEFAULT_MODE_OPTION = Modes.Username;

export class SearchMode extends React.Component<{ mode: string}, any> {
    private selectMode = () => {
        switch(this.props.mode) {
            case MODES:
                return  <select defaultValue={DEFAULT_MODE_OPTION.toString()} id={`sel${MODES}`}>
                            {Object.keys(Modes)
                                .filter(key => typeof Modes[key as any] === "number")
                                .map((k, i) =>
                                    <option key={i} value={Modes[k]}>{k}</option>
                                )}
                        </select>
        }
    }

    render() {
        return  <div>
                    {this.selectMode()}
                </div>
    }
}