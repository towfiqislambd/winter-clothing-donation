import { useEffect } from "react";
import { useState } from "react";
import Campaign from "./Campaign";

const DonationCampaigns = () => {
    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto px-5 py-5">
            {
                campaigns.map(campaign => <Campaign key={campaign.id} campaign={campaign}></Campaign>)
            }
        </div>
    )
}

export default DonationCampaigns;