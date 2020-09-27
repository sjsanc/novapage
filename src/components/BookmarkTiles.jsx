import React from "react";

export default function BookmarkTiles({ bookmarks }) {
  return (
    <div className="module bookmark-grid">
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
  );
}
