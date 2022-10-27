
const classes = {
    td: "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400",
    th: "border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
}

const Table = (props:{
    columns: any,
    rows: any
}) => {
    const columns = Boolean(props.columns)?props.columns:[];
    const rows = Boolean(props.rows)?props.rows:[];

    return (
        <table className="border-collapse table-auto w-full text-sm">
            <thead>
                <tr>
                    { 
                        columns.map((column:any, i:number) => 
                            <th key={i} 
                                className={ classes.th }>{ column.cfield }</th>) 
                    }
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
                {
                    rows.map((row:any, i:number)=>{
                        let tds = columns.map((column:any, j:number) => <td key={i+'_'+j} className={ classes.td }>{ row[column.ckey] }</td>);
                        return(
                            <tr key={ i+'_'+row.id }>
                                { tds }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;