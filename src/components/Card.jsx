import React from 'react';
import {cardList} from '../json/CardList.json'
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
const gridStyle = {
  width: '32%',
  textAlign: 'center',
};
const CardComponent=()=>{
    return (
      <div className="site-card-wrapper">
          {cardList.map((user) => (
              <>
               <Card.Grid style={gridStyle}>
                <Card hoverable="true" cover={<img alt="example" src={user.img} />}>
                 {<Meta title={user.name} description={user.name} /> }
                </Card>
               </Card.Grid>
              </>
          ))}
        </div>
      );
}

export {CardComponent}


