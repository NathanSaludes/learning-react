import { useContext } from "react";
import { ChannelContext, UserContext } from "./ContextHookDemo";

function Third() {
	const user = useContext(UserContext);
	const channel = useContext(ChannelContext);

	return (
		<div className={`component`}>
			{user} - {channel}
		</div>
	)
}

export default Third;