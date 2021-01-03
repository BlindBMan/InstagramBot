import React from "react";
import '../../../static/frontend/styles.css'
import {axiosInstance} from "../../axiosAPI";
import $ from 'jquery'


export default function DashBody() {

    function handleSubmit(e) {
        e.preventDefault()

        let acc = $('#username').val()
        let pass = $('#password').val()

        let acc_lst = $('#accounts').val().split(/[\n, ]+/)
        if (acc_lst[acc_lst.length - 1] === "")
            acc_lst = acc_lst.slice(0, -1)

        let comm_lst = $('#comments').val().split(/[\n, ]+/)
        if (comm_lst[comm_lst.length - 1] === "")
            comm_lst = comm_lst.slice(0, -1)

        if (acc === "" || pass === "" || acc_lst.length === 0 || comm_lst.length === 0) {
            alert("Some fields are empty!")
        }
        else {
            axiosInstance.post('/api/instabot/', {
                acc_list: acc_lst,
                comm_list: comm_lst,
                main_acc: acc,
                main_pass: pass
            }).then( () => {
                console.log("")
            }).catch(err => {
                console.log(err.response.data)
            })
        }
    }

    return (
        <div
            className="col-sm-12 col-sm-offset-3 col-lg-10 col-lg-offset-2 main"
            style={{
                marginTop: "12vh",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#fff",
                borderRadius: "4px",
                paddingTop: "5vh"
            }}
        >
                <div className="row">
                    <div className="col-lg-12"
                        style={{
                            paddingLeft: "42%",
                            paddingTop: "5vh"
                        }}
                    >
                        <h1 className="page-header">Dashboard</h1>
                    </div>
                </div>

                {/*<div className="panel panel-container"*/}
                {/*>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">*/}
                {/*            <div className="panel panel-teal panel-widget border-right">*/}
                {/*                <div className="row no-padding"><em*/}
                {/*                    className="fa fa-xl fa-shopping-cart color-blue"></em>*/}
                {/*                    <div className="large">120</div>*/}
                {/*                    <div className="text-muted">New Orders</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">*/}
                {/*            <div className="panel panel-blue panel-widget border-right">*/}
                {/*                <div className="row no-padding"><em className="fa fa-xl fa-comments color-orange"></em>*/}
                {/*                    <div className="large">52</div>*/}
                {/*                    <div className="text-muted">Comments</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">*/}
                {/*            <div className="panel panel-orange panel-widget border-right">*/}
                {/*                <div className="row no-padding"><em className="fa fa-xl fa-users color-teal"></em>*/}
                {/*                    <div className="large">24</div>*/}
                {/*                    <div className="text-muted">Accounts reached</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-xs-6 col-md-3 col-lg-3 no-padding">*/}
                {/*            <div className="panel panel-red panel-widget ">*/}
                {/*                <div className="row no-padding"><em className="fa fa-xl fa-search color-red"></em>*/}
                {/*                    <div className="large">25.2k</div>*/}
                {/*                    <div className="text-muted">Page Views</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="panel panel-default"
                    style={{
                        marginTop: "8vh",
                        marginLeft: "30%",
                        marginRight: "auto"
                    }}
                >
                    <div className="panel-body">
                        <form role="form" onSubmit={handleSubmit}>
                            <div className="col-md-6"
                                style={{
                                    paddingBottom: "4vh"
                                }}
                            >

                                <div className="form-group">
                                    <label>Instagram username</label>
                                    <input id={'username'} className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label>Instagram password</label>
                                    <input id={'password'} type="password" className="form-control" />
                                </div>
                                {/*<div className="form-group">*/}
                                {/*    <label>File input</label>*/}
                                {/*    <input type="file" />*/}
                                {/*        <p className="help-block">Upload only .txt files and place the usernames on separate lines</p>*/}
                                {/*</div>*/}
                                <div className="form-group">
                                    <label>Write the accounts on separate lines please</label>
                                    <textarea id={'accounts'} className="form-control" rows="3"
                                        placeholder={'insta_acc1\n insta_acc2\n insta_acc3\n etc...'}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Write the comments on separate lines please</label>
                                    <textarea id={'comments'} className="form-control" rows="3"
                                        placeholder={'comment1\n comment2\n comment3\n etc...'}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary"
                                    style={{
                                        paddingTop: "5vh"
                                    }}
                                >Start bot</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}