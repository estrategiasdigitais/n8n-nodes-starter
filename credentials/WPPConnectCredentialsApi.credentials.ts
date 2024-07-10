import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class WPPConnectCredentialsApi implements ICredentialType {
	name = 'wppConnectApi';
	displayName = 'WPP Connect API';
	properties: INodeProperties[] = [
		{
			displayName: 'Session Name',
			name: 'session',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the session informed in the registration',
		},

		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Access token code',
		},

		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'http://localhost:21465',
			hint: 'Inform the url provided by your service provider',
		},
	];
	documentationUrl = 'https://wppconnect.io/docs/';
}
