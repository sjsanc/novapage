import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function BookmarkTiles({ bookmarks }) {
  return (
    <>
      <div className="bookmark-grid">
        {bookmarks.length == 0 ? (
          <div className="bookmark-grid__empty">Add some bookmarks</div>
        ) : (
          bookmarks.map((tile, i) => (
            <a
              href={tile}
              key={bookmarks[i]}
              onContextMenu={(e) => console.log("hi")}
              className="bookmark-grid__item"
            ></a>
          ))
        )}
      </div>
      <div className="bookmark-grid__config">
        <FontAwesomeIcon icon={faBookmark} />
        <p>Edit Bookmarks</p>
      </div>
    </>
  );
}
