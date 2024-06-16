import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";

function DisplayContactInfo({ city, country, email, phone, page }) {
  return (
    <>
      <section>
        {" "}
        <Icon path={mdiMapMarker} size={1} viewBox="5 2 14 20" />
        <h3>
          {city}, {country}
        </h3>{" "}
        <Icon path={mdiEmailOutline} size={1} />
        <h4>{email}</h4>
        <Icon path={mdiPhoneOutline} size={1} />
        <h4>{phone}</h4>
        <Icon path={mdiOpenInNew} size={1} />
        <h4>
          <a href={page} target="_blank">
            Web Page
          </a>
        </h4>
        <hr className="generalInfoLine print" />
      </section>
    </>
  );
}

export default DisplayContactInfo;
