import {AbstractCustomComponentDefinition,} from "../../../framework/core/AbstractCustomComponentDefinition";
import {BaseInfoType, ElemConfig, ThemeItemType} from "../../../designer/DesignerType";
import {MenuInfo} from "../../../designer/right/MenuType";
import {PictureFilled} from "@ant-design/icons";
import React from "react";
import BgConfigContent from "./BgConfigContent";

class LcBgCore extends AbstractCustomComponentDefinition {
    updateTheme = (newTheme: ThemeItemType, sourceStyle: any) => {
    };

    getBaseInfo(): BaseInfoType | null {
        return null;
    }

    getChartImg(): any {
        return null;
    }

    getComponent(): any {
        return null;
    }

    getInitConfig(): ElemConfig | Object | null {
        return null;
    }

    getKey(): string {
        return "LcBg";
    }

    getMenuList(): Array<MenuInfo> {
        return [
            {
                icon: PictureFilled,
                name: '背景',
                key: 'background',
            },
        ];
    }

    getMenuToConfigContentMap(): { [p: string]: React.Component | React.FC | any } {
        return {
            'background': BgConfigContent,
        };
    }

}

export default LcBgCore;