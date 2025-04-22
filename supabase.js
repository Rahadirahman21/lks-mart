async function fetchAllTables(table_name){
    const {data,error} = await supabase.from(table_name).select("*")
    console.log(data)

    return data,error
}