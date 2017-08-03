import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {

        return(
            <section>
                <div>
                    <img src={this.props.user.thumbnail} />
                    <h2>{this.props.user.first} {this.props.user.last}</h2>
                    <h3>Age : {this.props.user.age}</h3>
                    <h3>Description: {this.props.user.description}</h3>
                </div>

                {this.props.user.id == 1 ?
                    <div>
                        1번 탭 메뉴
                        {this.props.user.age}번에서만 나오는 상자
                    </div>
                :null}

                {this.props.user.id == 2 ?
                    <div>
                        2번 탭 메뉴
                        {this.props.user.age}번에서만 나오는 상자
                    </div>
                :null}

                {this.props.user.id == 3 ?
                    <div>
                        3번 탭 메뉴
                        {this.props.user.age}번에서만 나오는 상자
                    </div>
                :null}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);


