const Header =  () =>{
    return(
        <nav style={styles.myHeader}>
            <ul ><a href="#">Home</a></ul>
            <ul><a href="#">News</a></ul>
            <ul><a href="#">Contact</a></ul>
            <ul><a href="#">About</a></ul>
        </nav>
    )
}

export default Header
const styles={
    myHeader:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        padding: "10px",
        textDecoration:"none",
        justifyContent:"space-evenly"
    }

}