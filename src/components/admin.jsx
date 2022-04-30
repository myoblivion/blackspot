import React, { useState, useEffect, useRef, LinkProps } from "react";
import { Admin, Resource } from "react-admin";
import { useHistory } from "react-router-dom";

const Admins = ({ record, handleLogout }) => {
  const Labels = [
    {
      id: "submen1",
      name: "Content1",
      htmlFor: "sub1",
    },
    {
      id: "submen2",
      name: "Content2",
      htmlFor: "sub2",
    },
    {
      id: "submen3",
      name: "Content3",
      htmlFor: "sub3",
    },
    {
      id: "submen4",
      name: "Content4",
      htmlFor: "sub4",
    },
  ];
  var filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }
    return posts.filter((post) => {
      var postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(Labels, searchQuery);

  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Admin";
  }, []);

  const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
      history.push(`?s=${searchQuery}`);
      e.preventDefault();
    };
    return (
      <form action="/" method="get" onSubmit={onSubmit} autoComplete="off">
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search "
          autoFocus="autoFocus"
          name="s"
        />
      </form>
    );
  };
  return (
    <div className="admin wrapper">
      <div className="admin-wrapper">
        <div className="admins">
          <h1>Admin Panel</h1>
          <button id="logout" onClick={handleLogout}>
            Log Out
          </button>
          <div className="admin_contents">
            <div className="components">
              <div className="game-components">
                <input type="radio" name="choose" id="choose1" />
                <input type="radio" name="choose" id="choose2" />
                <input type="radio" name="choose" id="choose3" />
                <input type="radio" name="choose" id="choose4" />
                <label htmlFor="choose1" id="lel">
                  Gogo Racing
                </label>
                <label htmlFor="choose2" id="lele">
                  Scion Fist
                </label>
                <label htmlFor="choose3" id="lelele">
                  Gogo World
                </label>
                <label htmlFor="choose4" id="lelelele">
                  Gogo Chain
                </label>
              </div>
              <div className="sub-components">
                <input type="radio" name="sub" id="sub1" />
                <input type="radio" name="sub" id="sub2" />
                <input type="radio" name="sub" id="sub3" />
                <input type="radio" name="sub" id="sub4" />
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                {filteredPosts.map((post, s) => (
                  <label htmlFor={post.htmlFor} key={s} id={post.id}>
                    {post.name}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <form autoComplete="off" id="backendstuff">
            <input type="text" placeholder="Author's name" />
            <input type="date" name="" id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="file" name="" id="" />
            <div className="button1">
              <button>Add new content</button>
              <button>Delete Content</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admins;
