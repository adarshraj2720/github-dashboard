import React from "react";

import data from '../data'

import { Link } from "react-router-dom";


class Article extends React.Component {
    constructor(props) {
        super()
        this.state = ({

        })
    }

    render() {
  
        return (
            <>
                {
                    data.map((a) => {
                        return (
                            <div key={a.id}>

                                <Link to={`/a/${a.id}`}>
                                    {a.title}
                                    </Link >
                                <p> {a.author}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default Article