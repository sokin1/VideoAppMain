import * as React from 'react';

interface IProps {
    name: string;
    job: string;
}

const Profile: React.SFC<IProps> = ({name, job}) => (
    <div>
        <h1>Profile</h1>
        <div>
            <b>Name: </b>
            {name}
        </div>
        <div>
            <b>Job: </b>
            {job}
        </div>
    </div>
);

// class Profile extends React.Component<IProps, object> {
//     public render() {
//         const {name, job} = this.props;
//         return (
//             <div>
//                 <h1>Profile</h1>
//                 <div>
//                     <b>Name: </b>
//                     {name}
//                 </div>
//                 <div>
//                     <b>Job: </b>
//                     {job}
//                 </div>
//             </div>
//         );
//     }
// }

export default Profile;