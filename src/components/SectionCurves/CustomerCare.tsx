import { CareInfoProps } from '../../interfaces/Props';
import { careInfo } from '../../local/en/section-curves/constants';

export const CustomerCare: React.FC<CareInfoProps> = ({ title, phoneNumber, loginlink, newUserLink, hours }) => {
    return (
        <div className="col--md-odd-3 col--lg-4">
            <h3 className="h-4 mg-b--5">{title}</h3>
            {phoneNumber && (
                <p className="h-3 mg-b--5">
                    {careInfo.callUs} <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </p>
            )}
            {loginlink && (
                <p className="h-3 mg-b--5">
                    <a href={loginlink}> {careInfo.accountLonin}</a>
                </p>
            )}
            {newUserLink && (
                <p className="h-4">
                    {careInfo.newUser} <a href={newUserLink}> {careInfo.createAccount}</a>
                </p>
            )}
            {hours && <p className="h-4">{hours}</p>}
        </div>
    );
};
