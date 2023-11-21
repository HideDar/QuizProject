import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState(
            {
                isShowListUser: !this.state.isShowListUser
            }
        )
    }

    render() {
        const { listUsers } = this.props;// object
        console.log(listUsers);
        //props => viết tắt property

        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {

                            return (
                                //dieu kien
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                            )

                        })}
                    </div>
                }
            </div>


        )
    }
}


export default DisplayInfor;