import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

import { defaultLink } from "../assets/link.png";

export default function BookmarkTiles({ bookmarks, toggleModal }) {
  return (
    <>
      <div className="bookmark-grid">
        {bookmarks.length === 0 ? (
          <p className="bookmark-grid__empty">
            <FontAwesomeIcon
              icon={faLevelDownAlt}
              className={"bookmark-grid__empty__arrow"}
            />
            Click edit to get started on your bookmark list.
          </p>
        ) : (
          bookmarks.map((tile, i) => (
            <a
              href={tile}
              key={bookmarks[i]}
              onContextMenu={(e) => console.log("hi")}
              className="bookmark-grid__item"
            >
              <img
                src={tile + "/favicon.ico"}
                className="bookmark-grid__item__favicon"
              ></img>
            </a>
          ))
        )}
      </div>
      <div className="bookmark-grid__config" onClick={toggleModal}>
        <FontAwesomeIcon icon={faBookmark} />
        <p>Edit Bookmarks</p>
      </div>
    </>
  );
}
