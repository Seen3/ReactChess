import react from "react";
import bh from "./resources/bh.png"
import bk from "./resources/bk.png"
import bb from "./resources/bb.png"
import blank from "./resources/blank.png"
import bq from "./resources/bq.png"
import bp from "./resources/bp.png"
import br from "./resources/br.png"

import wh from "./resources/wh.png"
import wk from "./resources/wk.png"
import wq from "./resources/wq.png"
import wp from "./resources/wp.png"
import wr from "./resources/wr.png"
import wb from "./resources/wb.png"

let selected=0;
let prev={
    unit:'',
    row:0,
    col:0,
    img:'',
    blk:null,
    pk:'',
}
export class Board extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [[
                "BR1", "BK1", "BB1", "BQ", "BK", "BB2", "BK2", "BR2"
            ], [
                "BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BP7", "BP8"
            ], [
                ".", ".", ".", ".", ".", ".", ".", "."
            ], [
                ".", ".", ".", ".", ".", ".", ".", "."
            ], [
                ".", ".", ".", ".", ".", ".", ".", "."
            ], [
                ".", ".", ".", ".", ".", ".", ".", "."
            ], [
                "WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7", "WP8"
            ],
            [
                "WR1", "WK1", "WB1", "WQ", "WK", "WB2", "WK2", "WR2"
            ],
            ],
        };
    }
    render() {

        return (
            <div>
                <BoxRow row="0" board={this.state.board[0]} />
                <BoxRow row="1" board={this.state.board[1]} />
                <BoxRow row="2" board={this.state.board[2]} />
                <BoxRow row="3" board={this.state.board[3]} />
                <BoxRow row="4" board={this.state.board[4]} />
                <BoxRow row="5" board={this.state.board[5]} />
                <BoxRow row="6" board={this.state.board[6]} />
                <BoxRow row="7" board={this.state.board[7]} />
            </div>
        )
    }
}
class BoxRow extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row,
        };
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                <Box row={this.state.row} col="0" board={this.props.board[0]} />
                <Box row={this.state.row} col="1" board={this.props.board[1]} />
                <Box row={this.state.row} col="2" board={this.props.board[2]} />
                <Box row={this.state.row} col="3" board={this.props.board[3]} />
                <Box row={this.state.row} col="4" board={this.props.board[4]} />
                <Box row={this.state.row} col="5" board={this.props.board[5]} />
                <Box row={this.state.row} col="6" board={this.props.board[6]} />
                <Box row={this.state.row} col="7" board={this.props.board[7]} />

            </div>
        )
    }
}
class Box extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row,
            column: this.props.col,
            unit: this.props.board,
            color: (this.getCol() % 2 ? 'brown' : 'lime'),
            img: this.showUnit(),
        };
        this.onClk = this.onClk.bind(this);
        this.showUnit = this.showUnit.bind(this);
    }
    getCol() {
        let r = parseInt(this.props.row);
        let c = parseInt(this.props.col);
        if (r % 2) {
            c += 1;
        }
        return (r * 8) + c;
    }
    onClk() {
        if (selected==0 && this.state.unit != '.')
        {
            selected=1;
            prev.col=this.state.column;
            prev.row=this.state.row;
            prev.unit=this.state.unit;
            prev.img=this.state.img;
            prev.blk=this;
            prev.pk=this.state.color;
            this.setState({ color: 'red' });
        }
        else if (selected==1)
        {
            selected=0;
            this.setState({
                unit:prev.unit,
                img:prev.img,
            })
            prev.blk.setState({
                unit:'.',
                img:blank,
                color:prev.pk,
            })
        }
    }
    showUnit() {
        let img = "";
        switch (this.props.board) {
            case "BR1":
            case "BR2":
                img = br;
                break;
            case "WR1":
            case "WR2":
                img = wr;
                break;
            case "BK1":
            case "BK2":
                img = bh;
                break;
            case "WK1":
            case "WK2":
                img = wh;
                break;
            case "BB1":
            case "BB2":
                img = bb;
                break;
            case "WB1":
            case "WB2":
                img = wb;
                break;
            case "BK":
                img = bk;
                break;
            case "WK":
                img = wk;
                break;
            case "BQ":
                img = bq;
                break;
            case "WQ":
                img = wq;
                break;

            case "BP1":
            case "BP2":
            case "BP3":
            case "BP4":
            case "BP5":
            case "BP6":
            case "BP7":
            case "BP8":
                img = bp;
                break;
            case "WP1":
            case "WP2":
            case "WP3":
            case "WP4":
            case "WP5":
            case "WP6":
            case "WP7":
            case "WP8":
                img = wp;
                break;
            default:
                img = blank;
        }
        return img;
    }
    render() {
        return (
            <div style={{
                display: "inline",
            }}>
                <h1 style={{
                    border: '1px solid black',
                    backgroundColor: `${this.state.color}`,
                    color: 'green',
                }} onClick={this.onClk}><img src={this.state.img}></img></h1>
            </div>
        )
    }
}