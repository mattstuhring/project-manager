import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../action/projectAction";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.setState({
      projects: this.props.getProjects()
    });
  }

  render() {
    const projects = this.props.project.projects;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />

              <CreateProjectButton />

              <br />
              <hr />

              {projects.map(project => {
                return <ProjectItem key={project.id} project={project} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
