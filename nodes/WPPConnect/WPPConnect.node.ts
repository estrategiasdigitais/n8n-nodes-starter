import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { codechatFields as wppConnectFields } from './WPPConnect.fields';
import { sendErrorPostReceive } from './Generic.func';

export class WPPConnect implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WPPConnect - WhatsApp Web API',
		name: 'wppConnect',
		icon: 'file:logo192.svg',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		description: 'Rest api for communication with WhatsApp',
		defaults: { name: 'wppConnect' },
		credentials: [{ name: 'wppConnectApi', required: true }],
		inputs: ['main'],
		outputs: ['main'],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}/api/{{$credentials.session}}',
			headers: {
				Authorization: 'Bearer  {{$credentials.token}}',
			},
			ignoreHttpStatusErrors: true,
		},
		properties: [
			{
				displayName: 'Resource',
				required: true,
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Send Message', value: 'sendMessage' },
					{ name: 'Group', value: 'group' },
					{ name: 'Chat', value: 'chat' },
				],
				default: 'sendMessage',
				routing: { output: { postReceive: [sendErrorPostReceive] } },
			},

			...wppConnectFields,
		],
	};
}
