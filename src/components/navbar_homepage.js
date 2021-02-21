const header = () => {
    return(
        <div>
            <nav>
              <div className="navLinks">
                <a href="#">Latest</a>
                <a href="#">Top Liked</a>
                <a href="#">Top Viewed</a>
                <select name="All Types" id="allTypes">
                  <option value="alltypes">All Types</option>
                </select>
              </div>
              <div className="navSearch">
                <input type="text" name="search" id="search" placeholder="Search..." />
              </div>
            </nav>
        </div>
    )
}

export default header;