import React, { Component } from 'react';
import { Modal } from 'antd';
import styles from './index.module.scss';

interface IProps {
	isShow: boolean;
	links: string; // 素材链接字符串，多个链接用逗号 ',' 隔开，如: 'a.com/a.jpg,b.com/b.jpg'
	type: string; // 素材类型：'image' | 'video'
	onClose: () => void;
}

interface IState {
	index: number;
}

export default class MediaBox extends Component<IProps, IState> {
	public state = {
		index: 0,
	};

	public handleLeft = () => {
		this.state.index &&
			this.setState(pre => {
				return { index: pre.index - 1 };
			});
	};

	public handleRight = () => {
		const { links } = this.props;
		const len = links.split(',').length;
		this.state.index < len - 1 &&
			this.setState(pre => {
				return { index: pre.index + 1 };
			});
	};

	public render() {
		const { isShow, links, type, onClose } = this.props;
		const srcArr = links.split(',');
		const { index } = this.state;

		return (
			<Modal
				visible={isShow}
				footer={null}
				className={styles.modal}
				bodyStyle={{ width: '80vw', height: '80vh', textAlign: 'center' }}
				closable={false}
				onCancel={() => {
					this.setState({ index: 0 });
					onClose();
				}}
				style={{ top: '10%' }}
			>
				<div
					className={`${styles.leftArrowBox} ${srcArr.length === 1 || index === 0 ? styles.disappear : undefined}`}
					onClick={this.handleLeft}
				>
					<div className={`${styles.leftArrow} ${srcArr.length === 1 || index === 0 ? styles.disappear : undefined}`} />
				</div>
				<div
					className={`${styles.rightArrowBox} ${srcArr.length === 1 || index === srcArr.length - 1 ? styles.disappear : undefined}`}
					onClick={this.handleRight}
				>
					<div className={`${styles.rightArrow} ${srcArr.length === 1 || index === srcArr.length - 1 ? styles.disappear : undefined}`} />
				</div>

				{srcArr[index] ? (
					type === 'image' ? (
						<img src={srcArr[index]} alt="" className={styles.image} />
					) : (
						<video src={srcArr[index]} className={styles.video} controls={true} autoPlay={true} />
					)
				) : (
					undefined
				)}

				<div className={styles.dotBox}>
					{srcArr.length > 1
						? srcArr.map((_, i) => {
								return (
									<div
										key={`dot-${i}`}
										className={`${styles.dot} ${i === index ? styles.activeDot : undefined}`}
										onClick={() => this.setState({ index: i })}
									/>
								);
						  })
						: undefined}
				</div>
			</Modal>
		);
	}
}
