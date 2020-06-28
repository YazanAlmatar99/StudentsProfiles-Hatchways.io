import React from "react";
import profiles from "./API/profiles";
import ProfileCard from "./components/ProfileCard";
import InputComponent from "./components/InputComponent";
import "./App.css";

class App extends React.Component {
  state = {
    profiles: [],
    renderedProfiles: [],
    profilesToShow: [],
    nameTerm: "",
    tagTerm: "",
  };
  componentWillMount() {
    this.handleData();
  }
  handleNameChange = async (e) => {
    await this.setState({ nameTerm: e.target.value });
    const profilesToShow = this.state.renderedProfiles.filter((profile) => {
      return profile.props.profile.firstName
        .toLowerCase()
        .includes(this.state.nameTerm);
    });
    this.setState({ profilesToShow: profilesToShow });
  };
  handleTagChange = async (e) => {
    await this.setState({ tagTerm: e.target.value });
  };
  mapArr = () => {
    const mappedArr = this.state.profiles.map((profile) => {
      return <ProfileCard profile={profile} key={profile.firstName} />;
    });
    this.setState({ renderedProfiles: mappedArr });
    return mappedArr;
  };

  handleData = async () => {
    const response = await profiles.get("/");
    this.setState({ profiles: response.data.students });
    this.mapArr();
  };
  render() {
    if (this.state.profiles) {
      return (
        <div>
          <InputComponent
            handleChange={this.handleNameChange}
            placeHolder="Search by name"
          />

          {this.state.profilesToShow.length
            ? this.state.profilesToShow
            : this.state.renderedProfiles}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
