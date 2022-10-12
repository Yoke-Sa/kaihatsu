import React, { useCallback, useContext } from "react";
import { PageStateContext } from "..";
import { BaseButton } from "../../component/atoms/button/BaseButton";
import { OnClickSetState } from "../../component/onClickSetState/onClickSetState";

const WelcomePage = () => {
    const { setPage } = useContext(PageStateContext);

    return (
        <div className="welcome">
            <header>
                <h1>Kohga TOP</h1>
            </header>

            <main>
                <ul>
                    <li>
                        <h1>車の利用</h1>
                        <p>車と通信を行います。</p>
                        <BaseButton onClick={() => OnClickSetState(1, setPage)} _className="buttom">
                            車を使う
                        </BaseButton>
                    </li>
                    <li>
                        <h1>管理画面</h1>
                        <p>車の管理を行います。</p>
                        <BaseButton onClick={() => OnClickSetState(7, setPage)} _className="buttom">
                            車管理マネージャ
                        </BaseButton>
                    </li>
                </ul>

                <div className="contents">
                    <h1>車の利用方法</h1>
                    <h2>1. 任意の経路を指定する</h2>
                    <p>　車を使うボタンを押下後、新規ルートボタンを押すと地図が表示されます。</p>
                
                    <h2>2. 既存の経路を指定する</h2>
                    <p>　車を使うボタンを押下後、既存ルートボタンを押すと地図が表示されます。</p>
                    
                    <h2>3. 車の状態を確認する</h2>
                    <p>　車を使うボタンを押下後、車を見るボタンを押すと地図が表示されます。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>
                    
                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>

                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>
                    
                    <h2>4. 終了する</h2>
                    <p>　車を使うボタンを押下後、終了ボタンを押すと通信を終了します。</p>
                </div>
            </main>

            <footer>
                <h1>&copy; Kohga. All rights Reserved.</h1>
            </footer>
        </div>
    );
};
export default WelcomePage;