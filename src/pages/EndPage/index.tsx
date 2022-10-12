import React, { useContext } from "react";
import { PageStateContext } from "..";
import { BaseButton } from "../../component/atoms/button/BaseButton";
import { OnClickSetState } from "../../component/onClickSetState/onClickSetState";

const EndPage = () => {
    const { setPage } = useContext(PageStateContext);
    return (
        <div className="end">
            <header>
                <h1>Thank you for coming</h1>
            </header>

            <main>
                <h1>　ご利用ありがとうございました。<br /><br />　またのご利用お待ちしております。</h1>
                <div>
                    <BaseButton onClick={() => OnClickSetState(0, setPage)} _className="buttom">
                        TOPへ
                    </BaseButton>
                </div>
            </main>

            <footer>
                <h1>&copy; Kohga. All rights Reserved.</h1>
            </footer>
        </div>
    )
}
export default EndPage