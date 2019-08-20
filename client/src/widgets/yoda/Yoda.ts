import { WidgetBase } from '@dojo/framework/core/WidgetBase';
import * as css from './yoda.m.css';
import { v } from '@dojo/framework/core/vdom';
import WebAnimation from '@dojo/framework/core/meta/WebAnimation';
import ThemedMixin from '@dojo/framework/core/mixins/Themed';

const head = require('./yoda-head.png');
const body = require('./yoda-body.png');

export interface YodaProperties {
	animationSpeed?: number;
	small?: boolean;
}

export class Yoda extends ThemedMixin(WidgetBase)<YodaProperties> {
	private _getHeadAnimation(animationSpeed: number) {
		return {
			id: 'character-head',
			effects: [
				{ marginBottom: '0px', transform: 'rotate(0deg)' },
				{ marginBottom: '7px', transform: 'rotate(-10deg)' },
				{ marginBottom: '0px', transform: 'rotate(0deg)' }
			] as any,
			timing: {
				duration: 800,
				iterations: Infinity
			},
			controls: {
				play: true,
				playbackRate: animationSpeed
			}
		};
	}

	protected render() {
		const { animationSpeed = 1, small } = this.properties;

		this.meta(WebAnimation).animate('character-head', this._getHeadAnimation(animationSpeed));

		return v('div', { classes: [ css.root, small ? css.small : null ] }, [
			v('img', { key: 'character-head', src: head, classes: css.head }),
			v('img', { key: 'character-body', src: body, classes: css.body }),
		]);
	}
}