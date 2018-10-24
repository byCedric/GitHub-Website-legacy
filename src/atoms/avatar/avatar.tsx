import React from 'react';
import { AvatarContainer, AvatarImage } from './elements';

interface Props {
	/** The absolute URL to the image. */
	url: string;
	/** The name of the person who is displayed, to use as the alternative text for the image. */
	name: string;
	/** The title to display when hovering the avatar. */
	title?: string;
}

export default function AvatarAtom(props: Props) {
	return (
		<AvatarContainer>
			<AvatarImage
				src={props.url}
				alt={props.name}
				title={props.title}
			/>
		</AvatarContainer>
	);
}
