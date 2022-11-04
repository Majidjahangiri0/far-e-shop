const Filter = ({ sortProducts, sort, groups, showProductsByGroup, showByGroup }) => {
  return (
    <div className="filter">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-12">
            <div className="filter-sort">
              <h6>مرتب سازی بر اساس :</h6>
              <div className="sort">
                <div>
                  <div className="sort-item">
                    <input type="radio" value="asc" name="radiovalues" onChange={sortProducts} />
                    <label>جدیدترین</label>
                  </div>
                  <div className="sort-item">
                    <input type="radio" value="desc" name="radiovalues" onChange={sortProducts} checked={sort === 'desc'} />
                    <label>قدیمی ترین</label>
                  </div>
                </div>
                <div>
                  <div className="sort-item">
                    <input type="radio" value="inexpens" name="radiovalues" onChange={sortProducts} />
                    <label>ارزان ترین</label>
                  </div>
                  <div className="sort-item">
                    <input type="radio" value="expens" name="radiovalues" onChange={sortProducts} />
                    <label>گران ترین</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-12">
            <div className="filter-brand">
              دسته بندی :
              <select value={showByGroup} onChange={showProductsByGroup}>
                <option value="">همه</option>
                {groups.map((group) => (
                  <option key={group.groupId} value={group.groupId}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
