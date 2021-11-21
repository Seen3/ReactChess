import react from "react";
export class Board extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            board:[[
                "","","","","","","",""
            ],[
                "","","","","","","",""
            ],[
                "","","","","","","",""
            ],[
                "","","","","","","",""
            ],[
                "","","","","","","",""
            ],[
                "","","","","","","",""
            ],[
                "","","","","","","",""
            ],
        ],
        };
        
    }
    render()
    {

        return(
            <div>
                <BoxRow row="0"/>
                <BoxRow row="1"/>
                <BoxRow row="2"/>
                <BoxRow row="3"/>
                <BoxRow row="4"/>
                <BoxRow row="5"/>
                <BoxRow row="6"/>
                <BoxRow row="7"/>   
            </div>
        )
    }
}
class BoxRow extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            row:this.props.row,
        };
    }
    render(){
        return (
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
            }}>
                <Box row={this.state.row} col="0"/>
                <Box row={this.state.row} col="1"/>
                <Box row={this.state.row} col="2"/>
                <Box row={this.state.row} col="3"/>
                <Box row={this.state.row} col="4"/>
                <Box row={this.state.row} col="5"/>
                <Box row={this.state.row} col="6"/>
                <Box row={this.state.row} col="7"/>
            </div>
        )
    }
}
class Box extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            row:this.props.row,
            column:this.props.col,
            unit:'.',
            color:(this.getCol()%2?'black':'white'),
        };
    }
    getCol(){
        let r=parseInt(this.props.row);
        let c=parseInt(this.props.col);
        if(r%2)
        {
            c+=1;
        }
        return (r*8)+c;
    }
    render(){
        return (
            <div style={{
                display:"inline",
                width:'60px',
            }}>
                <h1 style={{border: '1px solid black',
                            width: '50px',
                            backgroundColor:`${this.state.color}`,
                            color:'green',
                            }}>{this.state.unit}</h1>
            </div>
        )
    }
}