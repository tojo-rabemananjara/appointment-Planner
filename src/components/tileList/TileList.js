import React from "react";
import {Tile} from '../tile/Tile';
import PropTypes from 'prop-types';

export const TileList = ({objectList}) => {
  return (
    <div>
      {objectList.map((object,index) => 
        <Tile object={object} key={index}/>
      )}
    </div>
  );
};

TileList.propTypes = {
  objectList: PropTypes.array.isRequired
}